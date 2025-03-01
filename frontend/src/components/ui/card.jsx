// import React from 'react'; // Keep this import
import PropTypes from 'prop-types'; 
import clsx from 'clsx';

export const Card = ({ className, children, ...props }) => (
  <div
    className={clsx(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardHeader = ({ className, children, ...props }) => (
  <div className={clsx('flex flex-col space-y-1.5 p-6', className)} {...props}>
    {children}
  </div>
);

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardTitle = ({ className, children, ...props }) => (
  <h3
    className={clsx(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardDescription = ({ className, children, ...props }) => (
  <p className={clsx('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </p>
);

CardDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardContent = ({ className, children, ...props }) => (
  <div className={clsx('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardFooter = ({ className, children, ...props }) => (
  <div className={clsx('flex items-center p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};