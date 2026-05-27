const componentRegistry: Record<string, Component> = {}

export function registerCraftComponent(typename: string, component: Component): void {
    componentRegistry[typename] = component
}

export function useCraftComponents() {
    function resolve(typename: string): Component | null {
        return componentRegistry[typename] ?? null
    }

    return { resolve }
}
