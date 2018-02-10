loop do
  print "Do you want to continue? (y/n) "
  answer = gets.chomp.downcase
  if answer == "n"
    puts "You are now exiting the loop."
    break

  end
end
