export interface SocialLink {
    name: 'linkedin' | 'github'
    url: string
}

export interface Job {
    company: string,
    position: string,
    period: string,
}

export interface contentProps {
    workHistory: Job[],
    profile: {
        about: string,
        town: string,
        company: string
    },
    social: SocialLink[]
}
