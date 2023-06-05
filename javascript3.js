//JavaScript basic 3

function displayTasks() {
  console.log("==========================\n");
  console.log("現在の持っているタスクの一覧\n");
  console.log("==========================\n");

  const ary = ["掃除", "買い物", "散歩"];

  //配列の要素を順番に処理する場合はforEachを使う
  ary.forEach(function (value) {
    console.log(value + "\n");
  });

  const userinput = prompt(
    "確認、追加、削除、終了の４つのいずれかを入力してください"
  );
  if (userinput !== null && userinput !== "") {
    ary.push(userinput);
    console.log("==========================\n");
    console.log("現在の持っているタスクの一覧\n");
    console.log("==========================\n");
    //配列の要素を順番に処理する場合はforEachを使う
    ary.forEach(function (value) {
      console.log(value + "\n");
    });
  } else {
    console.log("入力がありませんでした。");
  }
}

displayTasks();
