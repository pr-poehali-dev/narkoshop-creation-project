import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
  likes: number;
}

interface CommentSectionProps {
  articleId: number;
}

const CommentSection = ({ articleId }: CommentSectionProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Александр Петров',
      text: 'Отличная статья! Очень полезная информация, спасибо за материал.',
      date: '2 часа назад',
      likes: 12
    },
    {
      id: 2,
      author: 'Мария Сидорова',
      text: 'Давно искала подобный материал. Всё изложено понятно и с примерами.',
      date: '5 часов назад',
      likes: 8
    },
    {
      id: 3,
      author: 'Игорь Васильев',
      text: 'Хотелось бы увидеть продолжение темы, есть ещё вопросы.',
      date: '1 день назад',
      likes: 5
    }
  ]);

  const [newComment, setNewComment] = useState({
    author: '',
    text: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.author.trim() || !newComment.text.trim()) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive"
      });
      return;
    }

    const comment: Comment = {
      id: comments.length + 1,
      author: newComment.author,
      text: newComment.text,
      date: 'Только что',
      likes: 0
    };

    setComments([comment, ...comments]);
    setNewComment({ author: '', text: '' });
    
    toast({
      title: "Успешно!",
      description: "Ваш комментарий добавлен",
    });
  };

  const handleLike = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="MessageSquare" className="text-primary" size={28} />
        <h2 className="text-3xl font-bold">Комментарии ({comments.length})</h2>
      </div>

      <Card className="mb-8 border-2 border-primary/20 shadow-lg">
        <CardHeader>
          <h3 className="text-xl font-semibold">Добавить комментарий</h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={newComment.author}
                onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                className="border-2 focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Ваш комментарий..."
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                className="min-h-[120px] border-2 focus:border-primary"
              />
            </div>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg"
            >
              <Icon name="Send" size={16} className="mr-2" />
              Отправить комментарий
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <Card
            key={comment.id}
            className="border-2 hover:border-primary/30 transition-all hover:shadow-lg animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                    {getInitials(comment.author)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-lg">{comment.author}</h4>
                    <span className="text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {comment.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(comment.id)}
                      className="hover:text-primary transition-colors group"
                    >
                      <Icon 
                        name="Heart" 
                        size={16} 
                        className="mr-1 group-hover:scale-110 transition-transform" 
                      />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:text-primary transition-colors"
                    >
                      <Icon name="Reply" size={16} className="mr-1" />
                      Ответить
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
