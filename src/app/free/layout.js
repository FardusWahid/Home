import { MyProvider } from "@/components/context/context";
import TanstackProvider from "@/components/context/provider";
import { roboto } from "@/lib/fonts";


export default function FreeLayout({ children }) {
  return (
    <div className={roboto.className}>
      <TanstackProvider>
        <MyProvider>{children}</MyProvider>
      </TanstackProvider>
    </div>
  );
}