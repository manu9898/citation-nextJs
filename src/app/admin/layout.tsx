import {PropsWithChildren} from "react";
import {Header} from "@/components/ui/header";

export default function Layout(props: PropsWithChildren){
return <div>
    <div className="flex flex-col gap-4">
        <Header />
        {props.children}
    </div>
</div>
}