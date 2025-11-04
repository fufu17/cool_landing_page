"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-beli-gold/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-beli-teal/20 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center rounded-full bg-beli-teal/10 px-4 py-1.5 text-sm font-medium text-primary">
              Discover NYC&apos;s Hidden Gems
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Find Your Next
            <span className="text-beli-gold"> Favorite Spot </span>
            in NYC
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            From hole-in-the-wall pizza joints to trendy rooftop bars, discover the
            best food experiences New York City has to offer. Curated by locals, loved by foodies.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth/signin">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Start Exploring
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <div className="text-3xl font-bold text-beli-teal">500+</div>
              <div className="text-sm text-muted-foreground">Food Spots</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-beli-teal">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Foodies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-beli-teal">5 Boroughs</div>
              <div className="text-sm text-muted-foreground">Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
