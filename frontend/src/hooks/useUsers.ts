import { useQuery } from "@tanstack/react-query";
import { UserProps } from "../Pages/SettingsPage/constants/settingColumns";
import { getUsers } from "../services/usersService";

export const useUsers = () =>
  useQuery<UserProps[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
