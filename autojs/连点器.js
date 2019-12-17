auto();

let name = '',
    client = '',
    duration = 0,
    times = 0,
    time = 0,
    type = -1,
    ra = null,
    storage = storages.create('Auto.js连点器'),
    historyData = storage.get('historyData'),
    hisNameList = [],
    hisName = '',
    hisClient = '',
    hisDuration = 0.3,
    hisTimes = 50,
    hisTime = 60,
    hisType = 0,
    edit = -1,
    runClick = () => {
        try {
            ra = new RootAutomator();
        } catch (e) {

        }

        let clientArr = client.replace(/,|，/g, '/').split('/'),
            record = () => {
                if (!historyData || historyData.toString() === '[]') {
                    historyData = [];
                    historyData.push({
                        name: name,
                        client: client,
                        duration: duration,
                        times: times,
                        time: time,
                        type: type
                    });
                } else if (edit > -1) {
                    historyData[edit] = {
                        name: name,
                        client: client,
                        duration: duration,
                        times: times,
                        time: time,
                        type: type
                    };
                } else {
                    historyData.push({
                        name: name,
                        client: client,
                        duration: duration,
                        times: times,
                        time: time,
                        type: type
                    });
                }

                storage.put('historyData', JSON.stringify(historyData));
            },
            pressScreen = () => {
                try {
                    press(Number(clientArr[0]), Number(clientArr[1]), 100);
                } catch (e) {
                    ra.press(Number(clientArr[0]), Number(clientArr[1]), 100);
                }
            };

        if (type === 0) {
            times = rawInput('请输入点击次数', hisTimes || '50');
            let validTimes = () => {
                if (!times) {
                    let result = confirm('是否取消输入？');
                    if (result) {
                        exit();
                    } else {
                        times = rawInput('请输入点击次数', hisTimes || '50');
                        validTimes();
                    }
                }
            }
            validTimes();
            
            record();

            for (let i = 0; i < times; i++) {
                pressScreen();
                sleep(duration * 1000);
            }
        }
    
        if (type === 1) {
            let startTime = 0,
                endTime = 0;

            time = rawInput('请输入点击总时间（秒）', hisTime || '60');
            let validTime = () => {
                if (!time) {
                    let result = confirm('是否取消输入？');
                    if (result) {
                        exit();
                    } else {
                        time = rawInput('请输入点击总时间（秒）', hisTime || '60');
                    }
                }
            }
            validTime();

            record();

            startTime = new Date().getTime();
            endTime = new Date().getTime();
            
            while (endTime - startTime < time * 1000) {
                endTime = new Date().getTime();
                pressScreen();
                sleep(duration * 1000);
            }
        }
        
        try {
            ra.exit();
        } catch (e) {

        }
        exit();
    };

let vaildHisData = (dataList) => {
    if (dataList && dataList !== '[]') {
        let hisList = [],
            hisListLen = 0,
            select = 0,
            pasrArray = (arr) => {
                if (arr instanceof Array) {
                    historyData =  arr;
                } else {
                    pasrArray(JSON.parse(arr));
                }
            };
        pasrArray(dataList);

        historyData.forEach(function(v) {
            hisList.push('名称：' + v.name);
        });
    
        hisListLen = hisList.length;
        hisNameList = hisList;
        edit = -1;
        
        select = dialogs.select.apply(undefined, ['请选择历史点击或新建点击', '新建点击'].concat(hisList).concat(['删除某个点击', '全部删除']));
        let validSelect = () => {
            if (select === -1) {
                let result = confirm('是否取消选择？');
                if (result) {
                    exit();
                } else {
                    select = dialogs.select.apply(undefined, ['请选择历史点击或新建点击', '新建点击'].concat(hisList).concat(['删除某个点击', '全部删除']));
                    validSelect();
                }
            } else if (select === 0) {
                // 新建，继续走流程
            } else if (select === hisListLen + 1) {

                // 多选框取消时没有定义相关方法,只能通过try catch捕捉
                try {
                    let mulSelect = dialogs.multiChoice('请选择要删除的点击名称', hisNameList),
                        valideMulSelect = () => {
                            if (!mulSelect.length) {
                                toast('选择不能为空');
                                mulSelect = dialogs.multiChoice('请选择要删除的点击名称', hisNameList);
                                valideMulSelect();
                            } else {
                                let sameNum = -1,
                                    mulSelectData = (() => {
                                        let arr = [];
                                        mulSelect.forEach((v) => {
                                            arr.push(hisNameList[v]);
                                        });
                                        return arr;
                                    })(),
                                    deleteJob = () => {
                                        
                                        for (let i = 0; i < hisNameList.length; i++) {
                                            for (let j = 0; j < mulSelectData.length; j++) {
                                                if (hisNameList[i].indexOf(mulSelectData[j]) > -1) {
                                                    sameNum = i;
                                                    break;
                                                }
                                            }
                                            if (sameNum > -1) {
                                                break;
                                            }
                                        }
                                        validNum();
                                    },
                                    validNum = () => {
                                        if (sameNum > -1) {
                                            historyData.splice(sameNum, 1);
                                            hisNameList.splice(sameNum, 1);
                                            sameNum = -1;
                                            deleteJob();
                                        } else {
                                            toast('删除成功');
                                            storage.put('historyData', JSON.stringify(historyData));
                                            vaildHisData(JSON.stringify(historyData));
                                        }
                                    };

                                deleteJob();
                                
                            }
                        };
                    valideMulSelect();
                } catch (e) {
                    select = dialogs.select.apply(undefined, ['请选择历史点击或新建点击', '新建点击'].concat(hisList).concat(['删除某个点击', '全部删除']));
                    validSelect();
                }
                
            } else if (select === hisListLen + 2) {
                storage.remove('historyData');
                exit();
            } else {
                let selectObj = historyData[select - 1];

                hisName = selectObj.name;
                hisClient = selectObj.client;
                hisDuration = selectObj.duration;
                hisTimes = selectObj.times;
                hisTime = selectObj.time;
                hisType = selectObj.type;

                edit = select - 1;
            }
        };
        validSelect();
    }
};
vaildHisData(historyData);

name = rawInput('请输入点击器名称', hisName || '');
let validName = () => {
    if (!name) {
        let result = '';

        if (name === '') {
            toast('名称不能为空');
            name = rawInput('请输入点击器名称', hisName || '');
            validName();
        } else {
            result = confirm('是否取消输入？');
            if (result) {
                exit();
            } else {
                name = rawInput('请输入点击器名称', hisName || '');
                validName();
            }
        }
    }
};
validName();
if (hisNameList.indexOf(name) > -1) {
    toast('不能输入重复名称');
    name = rawInput('请输入点击器名称', '');
    validName();
}



client = rawInput('请输入你要点击的坐标', hisClient || '0,0');
let validClient = () => {
    if (!client) {
        let result = confirm('是否取消输入？');
        if (result) {
            exit();
        } else {
            client = rawInput('请输入你要点击的坐标', hisClient || '0,0');
            validClient();
        }
    }
};
validClient();


duration = rawInput('请输入点击间隔（秒）', hisDuration || '0.3');
let validDuration = () => {
    if (!duration) {
        let result = confirm('是否取消输入？');
        if (result) {
            exit();
        } else {
            duration = rawInput('请输入点击间隔', hisDuration || '0.3');
            validDuration();
        }
    }
};
validDuration();


type = dialogs.singleChoice('请选择结束连点方式', ['次数', '时间'], Number(hisType) || 0);
let validSingleChoice = () => {
    if (type === -1) {
        let result = confirm('是否取消选择？');
        if (result) {
            exit();
        } else {
            type = dialogs.singleChoice('请选择结束连点方式', ['次数', '时间'], Number(hisType) || 0);
            validSingleChoice();
        }
    }
};
validSingleChoice();

runClick();