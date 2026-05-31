// @ts-nocheck
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import BkashButton from "./BkashButton"

const ProfileCard = ({ config }) => {
  return (
    <Card className="w-full border-2 shadow-lg sm:w-sm">
      <CardHeader>
        <img src="/my-avatar.svg" alt="avatar" className="mx-auto w-[75%]" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        <h1 className="text-center text-2xl">{config?.title}</h1>
        <p className="text-center text-muted-foreground">
          {config?.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center gap-6">
        <div className="flex w-full items-center justify-center gap-6">
          {config?.socials?.map((item) => (
            <a key={item.id} href={item.url} target="_blank">
              <img
                src={`/icons/${item.iconName}.svg`}
                alt="facebook"
                className="size-7"
              />
            </a>
          ))}
        </div>
        <BkashButton />
      </CardFooter>
    </Card>
  )
}

export default ProfileCard
