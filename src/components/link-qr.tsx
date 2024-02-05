import QRCode from "react-qr-code"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export function LinkQR({ url }: { url: string }) {
  return (
    <Accordion collapsible className="w-full" type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">QR Code url</AccordionTrigger>
        <AccordionContent>
          <QRCode
            size={150}
            style={{ maxWidth: "100%", width: "150px" }}
            value={url}
            viewBox="0 0 256 256"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
