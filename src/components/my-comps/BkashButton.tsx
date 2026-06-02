import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import { Button } from "../ui/button"
import { IconCircleCheckFilled, IconCopy } from "@tabler/icons-react"

const config = {
  number: "01910711585",
  clipboard_reset_time: 500,
  deep_link_fallback_delay: 2000,
  android_link:
    "https://play.google.com/store/apps/details?id=com.bKash.customerapp",
  ios_link: "https://apps.apple.com/us/app/bkash/id1351183172",
}

const openBkashApp = () => {
  const userAgent = navigator.userAgent

  const isAndroid = /android/i.test(userAgent)
  const isIOS = /iPad|iPhone|iPod/.test(userAgent)

  if (!isAndroid && !isIOS) return

  window.location.href = "bkash://"

  setTimeout(() => {
    if (isAndroid) {
      window.location.href = config.android_link
    } else if (isIOS) {
      window.location.href = config.ios_link
    }
  }, config.deep_link_fallback_delay)
}

const BkashButton = () => {
  const { copyToClipboard, copied } = useCopyToClipboard(
    config.clipboard_reset_time
  )

  const handleClick = async () => {
    copyToClipboard(config.number, "Could not Copy Bkash Number")
    openBkashApp()
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
