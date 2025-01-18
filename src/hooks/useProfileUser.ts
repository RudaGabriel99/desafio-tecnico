import { UserService } from "@/services/user";
import { TUser } from "@/types/user";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export function useProfileUser(options?: UseQueryOptions<TUser, unknown>) {
  const profileUser = new UserService();

  return useQuery<TUser, unknown>({
    queryKey: ["user"],
    queryFn: () => profileUser.getUser(),
    ...options,
  });
}
