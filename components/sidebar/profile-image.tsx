import Image from 'next/image'
import profilePic from '/public/profile.JPG'

const ProfileImage = () => (
  <div className="relative inline-block leading-none">
  <div className="relative z-10 diamond">
    <Image
      src={profilePic}
      alt='Sam Roebuck'
      className="relative z-10 diamond-img"></Image>
    </div>
    <div className="absolute inset-0 diamond diamond-off bg-pink z-0 transform translate-x-12"></div>
  </div>
)

export default ProfileImage
