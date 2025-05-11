export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3001/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
}

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3001/api/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const items = await response.json();
  console.log(items.message);
  if (items.message === "Unauthorized") {
    return items
  } else {
    return items.map(item => mapServerItemToLocalItem(item));
  }

}

export const deleteItemFromServer = async (id) => {
  await fetch(`http://localhost:3001/api/todo/${id}`, {
    method: "DELETE",
    credentials: "include",
  })
  return id;
}

export const markItemAsCompleted = async (id) => {
  const response = await fetch(`http://localhost:3001/api/todo/${id}/completed`, {
    method: "PUT",
    credentials: "include",
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
}

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    completed: serverItem.completed,
    dueDate: serverItem.date,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  }
}