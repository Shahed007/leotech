export const hostingPlans = async (api : string) => {
  try {
    const res = await fetch(
      api,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
