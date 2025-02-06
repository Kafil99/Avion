export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skG1bef26oXq7RzQi3SDXiY3HHKSgKti2fPiWHW2Wj6WfaW6SXmZcOQF4xz4YFxdvlSDsxM8svlkpkJxU4igNKqzoq3MCxAE95FobNQ7JZYtDHXNgKMNhbTew2ZRM9BxMVvtTERIiJ8ykvYZ2dGDCEr6Q2xD7WvIUQBDKHxIGIWxly22asBm",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
