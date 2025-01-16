import { PostService } from "@/services/community";
import { PostResponse } from "@/types/postResponse";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export function Usecommunity(options?: UseQueryOptions<PostResponse[], unknown>) {
  const postService = new PostService();

  return useQuery<PostResponse[], unknown>({
    queryKey: ["posts"],
    queryFn: () => postService.getPosts(),
    ...options,
  });
}
