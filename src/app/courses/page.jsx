import CourseCategoryPills from "@/components/pie";

export default async function Courses({searchParams}) {
    const {cat}= await searchParams;
  return(
    <div>
   <CourseCategoryPills cat={cat}/>
    </div>
  )
}

