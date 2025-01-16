import { DollarSign, UserCheck, Users2Icon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";

export function Sales(){
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Ultimos Clientes
                    </CardTitle>
                    <UserCheck className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>
                    Novos Clientes nos ultimos 30 dias
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/diego3g.png" />
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">
                            camilo deck
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400">
                            diegodk@gmail.com
                        </span>
                    </div>
                </article>
            </CardContent>

        </Card>
    )
}