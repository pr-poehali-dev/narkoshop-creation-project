import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Современные тренды веб-дизайна 2025',
    excerpt: 'Изучаем самые актуальные тренды в дизайне: градиенты, анимации и минимализм.',
    author: 'Анна Смирнова',
    date: '28 октября 2024',
    category: 'Дизайн',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    readTime: '5 мин'
  },
  {
    id: 2,
    title: 'Путеводитель по React Hooks',
    excerpt: 'Всё, что нужно знать о хуках в React: от useState до собственных кастомных хуков.',
    author: 'Дмитрий Иванов',
    date: '25 октября 2024',
    category: 'Разработка',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    readTime: '8 мин'
  },
  {
    id: 3,
    title: 'Искусственный интеллект в маркетинге',
    excerpt: 'Как ИИ меняет подходы к контент-маркетингу и персонализации в 2024 году.',
    author: 'Елена Петрова',
    date: '22 октября 2024',
    category: 'Маркетинг',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    readTime: '6 мин'
  },
  {
    id: 4,
    title: 'TypeScript: продвинутые техники',
    excerpt: 'Разбираемся с generics, conditional types и другими продвинутыми возможностями.',
    author: 'Максим Соколов',
    date: '20 октября 2024',
    category: 'Разработка',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    readTime: '10 мин'
  },
  {
    id: 5,
    title: 'Психология цвета в брендинге',
    excerpt: 'Как правильно выбрать цвета для бренда, чтобы влиять на эмоции аудитории.',
    author: 'Ольга Николаева',
    date: '18 октября 2024',
    category: 'Дизайн',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    readTime: '7 мин'
  },
  {
    id: 6,
    title: 'SEO-оптимизация в 2024: новые правила',
    excerpt: 'Что изменилось в SEO за последний год и как адаптировать стратегию.',
    author: 'Сергей Волков',
    date: '15 октября 2024',
    category: 'Маркетинг',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
    readTime: '9 мин'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['Все', 'Дизайн', 'Разработка', 'Маркетинг'];

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'Все' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
              ✨ Новый дизайн 2024
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Делимся опытом и вдохновением
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Актуальные статьи о дизайне, разработке и маркетинге
            </p>
            <div className="flex gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Найти статью..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
                Поиск
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category || (!selectedCategory && category === 'Все') ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category === 'Все' ? null : category)}
              className={selectedCategory === category || (!selectedCategory && category === 'Все')
                ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg'
                : 'hover:border-primary transition-all'}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl hover:text-primary transition-colors group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="User" size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{article.date}</span>
                <Link to={`/article/${article.id}`}>
                  <Button variant="ghost" size="sm" className="group/btn hover:text-primary">
                    Читать
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground">Попробуйте изменить поисковый запрос</p>
          </div>
        )}
      </section>

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

export default Index;