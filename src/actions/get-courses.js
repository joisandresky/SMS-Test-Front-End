export async function getCourses(query) {
    const params = new URLSearchParams(query);
    try {
        const res = await fetch(`${process.env.BASE_API_URL}/api/courses?${params.toString()}`)

        if(!res.ok) return [];

        return await res.json();
    } catch(error) {
        console.log(error);
        return [];
    }
}