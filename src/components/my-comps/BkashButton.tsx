import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { Button } from "../ui/button"
import { IconCircleCheckFilled, IconCopy } from "@tabler/icons-react"

const config = {
  number: "01910711585",
  copy_reset_time: 1000,
}

const BkashButton = () => {
  const { copyToClipboard, copied } = useCopyToClipboard(config.copy_reset_time)

  const handleClick = async () => {
    copyToClipboard(config.number, "Could not Copy Bkash Number")
  }

  return (
    <Button
      variant="default"
      className="w-full py-4 font-semibold"
      size="lg"
      onClick={() => handleClick()}
      disabled={copied}
    >
      {copied ? (
        <IconCircleCheckFilled className="size-4" />
      ) : (
        <IconCopy className="size-4" />
      )}
      {copied ? "Copied!" : "Copy Bkash Number"}
    </Button>
  )
}

export default BkashButton
