const tasksDOM = document.querySelector(".tasks");

// read tasks from /api/v1/tasks/
const showTasks = async () => {
    try {
        const { data: tasks } = await axios.get("/api/v1/tasks");

        // タスクを出力
        const allTasks = tasks.map((task) => {
            const { completed, _id, name } = task;
            console.log(name);

            return `<div class="single-task">
            <h5>
              <span><i class="fas fa-check-circle"></i></span>
              ${name}
            </h5>
            <div class="task-links">
              <!-- 編集リンク -->
              <a href="#" class="edit-link">
                <i class="fas fa-edit"></i>
              </a>
              <!-- ゴミ箱ボタン -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>`
        }).join("");
        tasksDOM.innerHTML = allTasks;
    } catch (err) {
        console.log(err);
    }
}

showTasks();