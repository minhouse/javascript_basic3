//JavaScript basic 3

function displayTasks() {
  console.log("==========================\n");
  console.log("現在の持っているタスクの一覧\n");
  console.log("==========================\n");

  var ary = ["掃除", "買い物", "散歩"];

  for (var i = 0; i < ary.length; i++) {
    console.log(ary[i] + "\n");
  }

  var userinput = prompt(
    "確認、追加、削除、終了の４つのいずれかを入力してください"
  );
  if (userinput !== null && userinput !== "") {
    ary.push(userinput);
    console.log("==========================\n");
    console.log("現在の持っているタスクの一覧\n");
    console.log("==========================\n");
    for (var i = 0; i < ary.length; i++) {
      console.log(ary[i] + "\n");
    }
  } else {
    console.log("入力がありませんでした。");
  }
}

displayTasks();
