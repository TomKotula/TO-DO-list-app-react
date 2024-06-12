export const getExampleTasks = async () => {
  const response = await fetch("/to-do-list-app-react/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
