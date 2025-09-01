import { useEffect, useRef, useState } from "react";
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useGlobalAlertDialog } from "@/context/AlertDialogContext";

export function useSupabaseUser() {
    const [user, setUser] = useState<User | null>(null);
    const { setOpen } = useGlobalAlertDialog();
    const modalOpened = useRef(false);

    useEffect(() => {
        supabaseBrowser.auth.getUser().then(({ data }: { data: { user: User | null } }) => {
            setUser(data?.user);
        });
        const { data: listener } = supabaseBrowser.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
            if (session) {
                setUser(session?.user);
                if (!modalOpened.current) {
                    setOpen(true);
                    modalOpened.current = true;
                }
            } else {
                setUser(null);
            }
        });
        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return { user };
}
