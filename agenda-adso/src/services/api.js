export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}