const FetchData = async (req, res) => {
  const data = await fetch(process, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(request),
  });

  console.log("menu", data);
};
