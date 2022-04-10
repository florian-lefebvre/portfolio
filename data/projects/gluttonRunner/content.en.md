## A bit of context

In 2018, I discovered programming with the [Unreal Engine 4](https://www.unrealengine.com/). I wasn't really writing code (I mean not C++) but I was using blueprints, a visual scripting system that allowed me the same than writing code.

![Unreal Enfine 4 blueprints](https://docs.unrealengine.com/4.27/Images/ProgrammingAndScripting/Blueprints/Editor/BlueprintEditor_Windows.webp)

_(Source: Unreal Engine 4 documentation)_

At the time, I didn't understand the principle of functions so there was duplicated code everywhere, it wasn't great. But still, I was able to write games.

I don't remember a lot of things about developing Glutton Runner 4 years ago, so I'll make my best to find interesting things to talk about.

## The game

The game is an endless runner like Subway Surfers. Seems pretty easy but it wasn't, at least with my level at the time. I faced several challenges during its development:

## Challenges

### Target

First of all, I wanted to make a mobile game using Unreal Engine 4. I think it wasn't quite ready for that at the time, Unity would have been a much better choice.

Moreover, I developed the game on desktop so it was definitely not mobile friendly nor optimized for mobile. I had to rework a lot of stuff.

### Performances

I wasn't a 3D modeler so I used a free pack on the Unreal Engine marketplace which was [POLYGON - City pack](https://syntystore.com/products/polygon-city-pack) from Synty Studios. It's a low poly city with a lot of assets but I wonder if it was optimized enough for mobile.

In order to fix the performance issues, I unloaded any tiles (basically, the game is about going through modules of assets like a bridge, a town etc) too far from the player. I also added a fog (a sphere around the player with a grey texture) to load the tiles as late as possible. I also added a shader to make the view rounded and hide upcoming fog as much as possible.

I also manually worked on LODs (Level Of Detail) in order not to show too many polygons if not needed.

## Wrapping up

That was definitely an interesting project and a great introduction to programming.
