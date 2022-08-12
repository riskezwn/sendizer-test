const loadAllForms = async () => {
  try {
    const response = await fetch('/data/operator-action-configurations.json');
    const forms = await response.json();

    return forms;
  } catch (error) {
    throw new Error();
  }
};

export default loadAllForms;
