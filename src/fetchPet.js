// 作為一個單獨的 async function 是可以被獨立測試的
const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) { // React query 規定如果不是 200 要 return error
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
