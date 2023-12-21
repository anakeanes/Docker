package main  //import main package

import (
	"fmt"   // a popular beginner package
	"net/http"
	"time"
)

func greet(w http.ResponseWriter, r *http.Request) {  //if we go to path "root, it will display Hellp World! + time
	fmt.Fprintf(w, "Hello World! %s", time.Now()) // Another way to write fmt.Println("Hello World")
}

func main() {
	http.HandleFunc("/", greet)
	http.ListenAndServe(":8080", nil)
}

//issue log
//command not found: go //install go 
// go.mod file not found in current directory or any parent directory; see 'go help modules' // wrong path
// ./main.go:10:17: syntax error: unexpected literal "Hello World! %s", expected name or ( //Syntax Error
// ./main.go:15:7: undefined: http.ListenandServe // "ListenAndServe"

// Success Output will be "Hello World! 2023-12-22 01:08:49.965267 +0700 +07 m=+451.026359959" //Success