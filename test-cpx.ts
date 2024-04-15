export const uniqBy = <T, R = unknown>(array: T[], predicate: (_: T) => R) =>
    array.filter((x, i, self) => i === self.findIndex(y => predicate(x) === predicate(y)))

export const performVoodoo = <K extends keyof any, T>(array: T[], predicate: (_: T) => K): Record<K, T[]> =>
    array.reduce(
      (groups, x) => {
        const key = predicate(x)
        if (key in groups) groups[key].push(x)
        else groups[key] = [x]
        return groups
      },
      {} as Record<K, T[]>,
    )

