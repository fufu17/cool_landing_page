import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Curated Collections",
    description: "Hand-picked restaurants, cafes, and bars organized by neighborhood, cuisine, and vibe.",
    icon: "🗺️",
  },
  {
    title: "Local Reviews",
    description: "Real reviews from NYC locals who know the best spots before they trend on Instagram.",
    icon: "⭐",
  },
  {
    title: "Save Your Favorites",
    description: "Create personalized lists of must-try spots and share them with your foodie friends.",
    icon: "❤️",
  },
  {
    title: "Hidden Gems",
    description: "Discover authentic spots that tourists don't know about. From Chinatown to Astoria.",
    icon: "💎",
  },
  {
    title: "Live Updates",
    description: "Stay updated on new openings, pop-ups, and the latest food trends across the five boroughs.",
    icon: "🔔",
  },
  {
    title: "Food Tours",
    description: "Follow curated food tour routes designed by local food critics and enthusiasts.",
    icon: "🚶",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Everything You Need to Explore NYC
          </h2>
          <p className="text-lg text-muted-foreground">
            Your personal guide to the best food experiences in the greatest city in the world.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:border-beli-gold/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 text-4xl">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
