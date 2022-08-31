import { Card, Text, Avatar } from "@nextui-org/react";

const STATUS_INFO = {
  ERROR: { color: "error", description: "Inactivo", statusLabelIcon: "E" },
  OK: { color: "success", description: "Activo", statusLabelIcon: "OK" },
  WARNING: { color: "warning", description: "Activo", statusLabelIcon: "E" }
}

export const MicroserviceCard = ({
  title,
  status,
  interruptedOrdersCount
}) => {
  return (
    <Card
      isPressable
      isHoverable
      css={{ mw: "200px", alignItems: "center" }}>
      <Card.Header>
        <Text b>{title}</Text>
      </Card.Header>
      <Card.Body>
        <Avatar
          text={STATUS_INFO[status].statusLabelIcon}
          size="xl"
          color={STATUS_INFO[status].color}
          textColor="white" />
        <div style={{ width: "100%", display: "inline-block" }}>
          <div>
            <Text size="$xs">{STATUS_INFO[status].description}</Text>
          </div>
          <div>
            <Text size="$xs">
              Ordenes fallidas: {interruptedOrdersCount || 0}
            </Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
