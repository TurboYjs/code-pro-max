import { useEditorContext } from '../context/EditorContext';
import { useUserContext } from '../context/UserContext';
import {useSession} from "next-auth/react";

export default function useUserPermission() {
  const { fileData } = useEditorContext();
  const { userData } = useUserContext();
  const { data } = useSession()

  return (
    fileData.users[data?.user?.id??'']?.permission ??
    fileData.settings.defaultPermission
  );
}
