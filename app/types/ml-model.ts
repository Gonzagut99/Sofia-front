export type AcceptedValues = {
    gender:['female', 'male'],
    race_ethnicity: ['group B', 'group C', 'group A', 'group D', 'group E'],
    parental_level_of_education: ["bachelor's degree", 'some college', "master's degree", "associate's degree", 'high school', 'some high school'],
    lunch: ['standard', 'free/reduced'],
    test_preparation_course: ['none', 'completed'],
}
export type AcceptedValuesCreate = {
    gender: string,
    race_ethnicity: string,
    parental_level_of_education: string,
    lunch: string,
    test_preparation_course: string,
}