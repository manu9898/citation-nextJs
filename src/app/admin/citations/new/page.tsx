"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useFormStatus} from "react-dom";
import {CreateCitationAction} from "@/app/admin/citations/citations.action";


export default function Page(){


    const createCitation = async (FormData: FormData)=>{

       const json = await CreateCitationAction({
           author: String(FormData.get("author")),
           text: String(FormData.get(("text"))),
       })

  if (json.error){
      alert(json.error)
  }
    }

    const SubmitButton = () => {
        const {pending} = useFormStatus();
        return (
            <Button disabled={pending} type="submit">{pending ? "Loading..." : "Submit" }</Button>
        )
    }

    return(
        <Card>
            <CardHeader>
                <CardTitle>Create citation</CardTitle>
            </CardHeader>
            <CardContent>
            <form action={
                async (formData)=>{
                  await  createCitation(formData)
                }
            }
                  className="flex flex-col gap-2"
            >
                <Label>
                    Citation
                    <Input name="text" />
                </Label>
                <Label>
                    Author
                    <Input name="author" />
                </Label>
                <SubmitButton />
            </form>
            </CardContent>
        </Card>
    )


}