import {Button, buttonVariants} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>URL : /</CardTitle>
        </CardHeader>
            <CardContent>
                <Link href="/admin" className={buttonVariants({size: "lg", variant: "outline"})}>
                    /admin
                </Link>
                <Button variant="dark">bonsoir !</Button>
                <Input />
            </CardContent>
    </Card>
  );
}
