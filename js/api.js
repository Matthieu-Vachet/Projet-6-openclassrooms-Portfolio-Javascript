export const worksWrapper = async () => {
  try {
    const reponse = await fetch("http://localhost:5678/api/works");
    const data = await reponse.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const categorieWrapper = async () => {
  try {
    const reponse = await fetch("http://localhost:5678/api/categories");
    const data = await reponse.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const works = await worksWrapper();
export const categories = await categorieWrapper();

export const tokenWrapper = async (user) => {
  try {
    const reponse = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(user),
    });

    return reponse;
  } catch (error) {
    console.error(error);
  }
};

export const postApi = async (files, userOnline) => {
  try {
    const reponse = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + userOnline.token,
      },
      body: files,
    });

    return reponse;
  } catch (error) {
    console.error(error);
  }
};

export const deleteApi = async (idOfWorks, userOnline) => {
  try {
    const reponse = await fetch(
      "http://localhost:5678/api/works/" + idOfWorks,

      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + userOnline.token,
        },
      }
    );
    return reponse;
  } catch (error) {
    console.error(error);
  }
};
