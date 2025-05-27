import { Button } from '@cove/ui/components/button'

export default async function Home() {
  const data = await fetch('https://api.github.com/users/octocat')

  return (
    <div>
      <Button>Click me</Button>
      <p>{JSON.stringify(await data.json())}</p>
    </div>
  )
}
