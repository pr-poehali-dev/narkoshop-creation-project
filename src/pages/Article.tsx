import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import CommentSection from '@/components/CommentSection';

const mockArticle = {
  id: 1,
  title: 'Современные тренды веб-дизайна 2025',
  content: `
    <p>Веб-дизайн постоянно эволюционирует, и 2025 год принёс нам множество интересных трендов, которые меняют подход к созданию пользовательских интерфейсов.</p>
    
    <h3>1. Градиенты нового поколения</h3>
    <p>Градиенты возвращаются, но теперь они более сложные и динамичные. Вместо простых переходов между двумя цветами, дизайнеры используют многоцветные комбинации с мягкими переходами, создающие эффект глубины.</p>
    
    <h3>2. Анимации и микроинтерактивность</h3>
    <p>Современные веб-сайты становятся более живыми благодаря тонким анимациям. Hover-эффекты, плавные переходы и анимированные элементы создают более приятный пользовательский опыт.</p>
    
    <h3>3. Минимализм с акцентами</h3>
    <p>Минималистичный дизайн остаётся популярным, но теперь с яркими акцентами. Использование больших типографических элементов и контрастных цветов помогает привлечь внимание к важным элементам.</p>
    
    <h3>4. Тёмные темы</h3>
    <p>Dark mode стал не просто трендом, а обязательной функцией. Он не только выглядит современно, но и снижает нагрузку на глаза пользователей.</p>
    
    <h3>5. 3D-элементы и эффект глубины</h3>
    <p>Интеграция 3D-графики и элементов с эффектом параллакса создаёт ощущение глубины и делает интерфейс более immersive.</p>
    
    <h3>Заключение</h3>
    <p>Все эти тренды объединяет одна цель — создание более привлекательного и удобного пользовательского опыта. Главное — не перегружать интерфейс и использовать тренды обдуманно, исходя из потребностей вашей аудитории.</p>
  `,
  author: 'Анна Смирнова',
  date: '28 октября 2024',
  category: 'Дизайн',
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
  readTime: '5 мин'
};

const Article = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Мой Блог
            </h1>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              О блоге
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg">
              <Icon name="PenSquare" size={16} className="mr-2" />
              Написать статью
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group animate-fade-in">
          <Icon name="ArrowLeft" size={20} className="group-hover:-translate-x-1 transition-transform" />
          Вернуться к статьям
        </Link>

        <div className="animate-fade-in-up">
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 mb-4">
              {mockArticle.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              {mockArticle.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="User" size={18} />
                <span>{mockArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                <span>{mockArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} />
                <span>{mockArticle.readTime}</span>
              </div>
            </div>
          </div>

          <img
            src={mockArticle.image}
            alt={mockArticle.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl mb-8 animate-scale-in"
          />

          <div 
            className="prose prose-lg max-w-none mb-12 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: mockArticle.content }}
              className="[&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-foreground [&>p]:text-foreground [&>p]:leading-relaxed [&>p]:mb-4"
            />
          </div>

          <div className="flex items-center justify-between border-t border-b py-6 mb-12 animate-fade-in">
            <div className="flex gap-3">
              <Button variant="outline" className="border-2 hover:border-primary hover:bg-primary/5">
                <Icon name="ThumbsUp" size={18} className="mr-2" />
                Нравится
              </Button>
              <Button variant="outline" className="border-2 hover:border-primary hover:bg-primary/5">
                <Icon name="Bookmark" size={18} className="mr-2" />
                Сохранить
              </Button>
              <Button variant="outline" className="border-2 hover:border-primary hover:bg-primary/5">
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>

          <CommentSection articleId={mockArticle.id} />
        </div>
      </article>

      <footer className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-t mt-20 animate-fade-in">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Sparkles" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">Мой Блог</h3>
              </div>
              <p className="text-muted-foreground">
                Делимся знаниями и вдохновением в сфере дизайна, разработки и маркетинга.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О блоге
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-all hover:scale-110">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-all hover:scale-110">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-all hover:scale-110">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Мой Блог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
