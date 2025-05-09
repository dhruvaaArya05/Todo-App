export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3001/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
  });
  const items = await response.json();
  return items.map(mapServerItemToLocalItem);
}

export const deleteItemFromServer = async (id) => {
  await fetch(`http://localhost:3001/api/todo/${id}`, {
    method: "DELETE",
  })
  return id;
}

export const markItemAsCompleted = async (id) => {
  const response = await fetch(`http://localhost:3001/api/todo/${id}/completed`, {
    method: "PUT",
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