import { Chart } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BoxIcon, DollarSign, Percent, Users } from "lucide-react";

export default function home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
           <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total de vendas
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"/>
           </div>

           <CardDescription>
            Total de vendas em um mês
          </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              R$ 100.000,00
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
           <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Novos Clientes
            </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
           </div>

           <CardDescription>
            Total de Clientes em 30 dias
          </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              354
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
           <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Pedidos de Hoje
            </CardTitle>
            <Percent className="ml-auto w-4 h-4"/>
           </div>

           <CardDescription>
              Total de pedidos Hoje
          </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              8
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
           <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Pedidos em 30 dias
            </CardTitle>
            <BoxIcon className="ml-auto w-4 h-4"/>
           </div>

           <CardDescription>
              Total de pedidos em 30 dias
          </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              8000
            </p>
          </CardContent>
        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart />
        <Sales />
      </section>
    </main>
  );
}