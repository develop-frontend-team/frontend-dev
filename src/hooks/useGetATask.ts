import { useQuery } from "@tanstack/react-query";
// FIXME: axiosを使う
// import axios from "axios";

export type Task = {
    id: number,
    title: string,
    description: string
}

// FIXME: fetchTaskを組み込む
// const fetchTask = async (taskId: number) => {
//     const response = await axios.get(`/api/tasks/${taskId}`);
//     return response.data;
// }

// FIXME: taskIdから取得する
export const useGetATask = () => {
    const { isPending, error, data } = useQuery({
        queryKey: [],
        queryFn: () =>
          fetch(`https://official-joke-api.appspot.com/random_joke`).then((res) =>
            res.json()
          ),
      });
    return {
        isPending: isPending,
        error : error,
        data: data
    }
}