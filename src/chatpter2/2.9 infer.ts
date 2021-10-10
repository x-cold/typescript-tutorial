type GetLabelTypeFromObject<T> = T extends { label: infer R } ? R : never

type Result = GetLabelTypeFromObject<{ label: string }>;

// 这里如果直接使用 T[0] 返回第一项的类型是不被允许的，因为泛型是一个整体
// type GetFirstParamTypeWithError<T> = T extends (...args) => any ? T[0] : never

type GetFirstParamType<T> = T extends (...args: infer R) => any ? R[0] : never
