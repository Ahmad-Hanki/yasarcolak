import Container from "@/components/ui/Container";
import { useLocale } from "next-intl";
import Link from "next/link";
import photo1 from '@/assets/homeGrid4Photo1.jpg';
import photo2 from '@/assets/homeGrid4Photo2.jpg';
import photo3 from '@/assets/homeGrid4Photo3.jpg';
import photo4 from '@/assets/homeGrid4Photo4.jpg';
import photo5 from '@/assets/homeGrid4Photo5.jpg';
import photo6 from '@/assets/homeGrid4Photo6.jpg';
import HomeBlogCard from "./HomeBlogCard";
const HomeBlogs = () => {
  if (useLocale() == "en") return null;

  const data = [
    { href: '#',
     title: 'Kapsül Endoskopisi Ve Tıbbi Görüntüleme Yöntemleri',
     img: photo1
    },
    { href: '#',
     title: 'Gastroenteroloji: Sindirim Sisteminin Uzmanı',
     img: photo2
    },
    { href: '#',
     title: 'servicebox Kolonoskopi Neden Yapılır?',
     img: photo3
    },
    { href: '#',
     title: 'Akalazya Teşhisi Nasıl Konur?',
     img: photo4
    },
    { href: '#',
     title: ' servicebox Yutma Güçlüğü (Disfaji) Nedir?',
     img: photo5
    },
    { href: '#',
     title: 'servicebox Endoskopik Kistogastrostomi Nedir?',
     img: photo6
    }
 ]
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col gap-7">
          <div className="flex justify-center flex-col gap-4">
     
            <h1 className="text-4xl text-primary/70 text-center">
              Gastroenteroloji Makaleleri
            </h1>
            <Link
              className="w-fit mx-auto text-center btn px-5 text-white bg-primary/70 hover:bg-primary/80"
              href={"/blogs"}
            >
              Tüm Makaleler
            </Link>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((d,i) => (
                    <HomeBlogCard key={i} data ={d} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBlogs;
