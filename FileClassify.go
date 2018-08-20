package main

import (
	"fmt"
	"os/exec"
	"strings"
)

//输入 文件路径 功能 将某个目录下的文件按照文件类型自动分类到对应的文件夹
//包命名规则 package： 文件类型名 不含.  file：含.   eg：json 《——》1.json
//按照文档名归类到对应的文件夹
var FilePackageMap map[string]string

func mapInit(path string) {
	comd := "cd ~ \n  cd " + path + " \n ls "
	s, err := exec.Command("sh", "-c", comd).CombinedOutput()
	comderr(err)
	fileNames := byteToString(s)
	for _, fileName := range fileNames {
		//println(fileName)
		if strings.Contains(fileName, ".") {
			s := strings.Split(fileName, ".")
			//println(s[0], s[1])
			FilePackageMap[fileName] = s[1]
		}
	}
}

func comderr(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

func comdOrganize(path, souce, distance string) string {
	comd := "cd ~ \n  cd " + path + " \n mkdir " + distance + "  \n mv  " + souce + " /* " + distance
	return comd
}
func classify(path string) {
	//从map中遍历出文件 文件名  执行指令
	for souce, distance := range FilePackageMap {
		comd := comdOrganize(path, souce, distance)
		_, err := exec.Command("sh", "-c", comd).CombinedOutput()
		comderr(err)
	}
}
func main() {
	const path = "Downloads/case/1"
	FilePackageMap = make(map[string]string)
	mapInit(path)
	classify(path)
	println("work over!")
}

func byteToString(s []byte) []string {
	len := len(s)
	var fileNames = make([]string, len)
	var tempString string
	fileNum := 0
	for index := 0; index < len; index++ {
		temp := s[index]
		if temp == 10 {
			fileNames[fileNum] = tempString
			tempString = ""
			fileNum = fileNum + 1
			continue
		}
		tempString = tempString + string(temp)
	}
	//fmt.Print(fileNames)
	return fileNames
}
