import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { icon: 'BookOpen', value: '150+', label: 'Статей' },
    { icon: 'Users', value: '5000+', label: 'Читателей' },
    { icon: 'MessageSquare', value: '1200+', label: 'Комментариев' },
    { icon: 'Heart', value: '3500+', label: 'Лайков' }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'Актуальный контент',
      description: 'Следим за трендами и делимся самыми свежими материалами из мира дизайна и технологий.'
    },
    {
      icon: 'Users',
      title: 'Экспертное сообщество',
      description: 'Наши авторы — практикующие специалисты с многолетним опытом в своих областях.'
    },
    {
      icon: 'MessageSquare',
      title: 'Живое общение',
      description: 'Обсуждаем статьи, делимся опытом и помогаем друг другу расти профессионально.'
    },
    {
      icon: 'Zap',
      title: 'Практический подход',
      description: 'Каждая статья содержит реальные примеры и советы, которые можно применить сразу.'
    }
  ];

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
            <Link to="/about" className="text-primary transition-colors font-medium">
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-shift bg-[length:200%_200%]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
              ✨ О проекте
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Место для роста и вдохновения
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали этот блог, чтобы объединить энтузиастов дизайна, разработки и маркетинга. 
              Здесь каждый может найти что-то полезное и поделиться своим опытом.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={stat.icon as any} className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему мы?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-20 animate-fade-in">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Icon name="Target" className="text-white" size={32} />
              </div>
              <CardTitle className="text-3xl mb-4">Наша миссия</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                Мы верим, что обмен знаниями и опытом делает профессиональное сообщество сильнее. 
                Наша цель — создать пространство, где каждый может учиться, делиться и развиваться. 
                Мы стремимся публиковать только качественный и проверенный контент, который действительно помогает людям расти.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Присоединяйтесь к нам!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Станьте частью нашего сообщества. Читайте статьи, оставляйте комментарии, делитесь опытом.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать статьи
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 hover:border-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              Подписаться на новости
            </Button>
          </div>
        </div>
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

export default About;
