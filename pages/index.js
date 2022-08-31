import { Grid } from "@nextui-org/react";
import { Layout } from "../components/shared";
import { MicroserviceCard } from "../components/shared"

const MOCKED_MICROSERVICES = [
  {
    agentName: "INSTALEAP",
    status: "OK"
  },
  {
    agentName: "DELI",
    status: "ERROR",
    interruptedOrdersCount: 20
  },
  {
    agentName: "DWH",
    status: "WARNING",
    interruptedOrdersCount: 12
  },
  {
    agentName: "SPLIT 2",
    status: "OK"
  },
  {
    agentName: "SPLIT 3",
    status: "OK"
  },
  {
    agentName: "SPLIT 4",
    status: "OK"
  },
  {
    agentName: "SPLIT 5",
    status: "OK"
  },
  {
    agentName: "SPLIT 6",
    status: "OK"
  }
]

export default function App() {
  return (
    <Layout>
      <Grid.Container gap={2} justify="center">
        {MOCKED_MICROSERVICES.map(ms => {
          return (
            <Grid xs={3} key={`item-${ms.agentName}`}>
              <MicroserviceCard
                status={ms.status}
                title={ms.agentName}
                interruptedOrdersCount={ms.interruptedOrdersCount}/>
            </Grid>
          )
        })}
      </Grid.Container>
    </Layout>
  );
}
